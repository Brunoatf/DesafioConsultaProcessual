import json
import typing
from datetime import date


class LawsuitDatabase:
    """
    This class encapsulates the lawsuit database and provides methods to search for lawsuits.

    Considerations:

    - I implemented the database as a .json file for the sake of simplicity, as recommended by the challenge rules.
    - In a real-world scenario, this class would interact with a real database such as Redis.
    - Finally, I used static methods as the class does not need to maintain any state or have multiple instances.
    """

    @staticmethod
    def _load_lawsuits() -> dict:
        with open("data/lawsuits.json") as f:
            return json.load(f)

    @staticmethod
    def search_lawsuits(
        cnj: str = None,
        court: str = None,
        start_date_interval: date = None,
        end_date_interval: date = None,
        plaintiff: str = None,
        defendant: str = None,
    ) -> typing.List[dict]:
        """Performs a search in the lawsuit database based on the provided parameters.

        Args:
            cnj (str): The CNJ (National Justice Council) number of the lawsuit in the format NNNNNNN-NN.NNNN.N.NN.NNNN
            court (str): The court where the lawsuit is being processed.
            start_date_interval (date): The start date of the interval where the lawsuit was filed.
            end_date_interval (date): The end date of the interval where the lawsuit was filed.
            plaintiff (str): The name of the plaintiff.
            defendant (str): The name of the defendant.

        Returns:
            A list of dicts, each representing a lawsuit that matches the search parameters.
        """

        lawsuits = LawsuitDatabase._load_lawsuits()
        results = []

        for lawsuit in lawsuits:
            if cnj and lawsuit["cnj"] != cnj:
                continue
            if court and lawsuit["court"] != court:
                continue
            if start_date_interval and lawsuit["start_date"] < start_date_interval:
                continue
            if end_date_interval and lawsuit["start_date"] > end_date_interval:
                continue
            if plaintiff and lawsuit["plaintiff"] != plaintiff:
                continue
            if defendant and lawsuit["defendant"] != defendant:
                continue
            results.append(lawsuit)

        return results
