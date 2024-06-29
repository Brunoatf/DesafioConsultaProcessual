from datetime import date
from typing import List

import strawberry
from database import LawsuitDatabase


@strawberry.type
class Movement:
    movementDate: date
    description: str


@strawberry.type
class Lawsuit:
    cnj: str
    court: str
    startDate: date
    plaintiff: str
    defendant: str
    movements: List[Movement]


@strawberry.type
class Query:
    def _format_results(results: dict) -> List[Lawsuit]:
        """Formats the search results into a list of Lawsuit objects.

        Args:

            results (dict): The search results from the database.

        Returns:

            A list of Lawsuit objects.
        """

        return [
            Lawsuit(
                cnj=result["cnj"],
                court=result["court"],
                startDate=result["startDate"],
                plaintiff=result["plaintiff"],
                defendant=result["defendant"],
                movements=[
                    Movement(
                        movementDate=movement["movementDate"],
                        description=movement["description"],
                    )
                    for movement in result["movements"]
                ],
            )
            for result in results
        ]

    @strawberry.field
    def lawsuit(
        self,
        cnj: str = None,
        court: str = None,
        start_date_interval: date = None,
        end_date_interval: date = None,
        plaintiff: str = None,
        defendant: str = None,
    ) -> List[Lawsuit]:
        results = LawsuitDatabase.search_lawsuits(
            cnj, court, start_date_interval, end_date_interval, plaintiff, defendant
        )
        return Query._format_results(results)


schema = strawberry.Schema(query=Query)
