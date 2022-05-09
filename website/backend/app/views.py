from rest_framework.views import APIView
from rest_framework.response import Response
import pickle


class PredictApiView(APIView):
    def post(self, request, format=None):
        predict = [
            [
                request.data["predict"]["pregnancies"],
                request.data["predict"]["glucose"],
                request.data["predict"]["bloodpressure"],
                request.data["predict"]["bmi"],
                request.data["predict"]["diabetespedigreefunction"],
                request.data["predict"]["age"],
            ]
        ]
        loaded_model = pickle.load(open("utils/voting.pickle", "rb"))
        res = {
            "reslult": loaded_model.predict(predict)[0],
            "knn_voted": loaded_model.transform(predict)[0][0],
            "nb_voted": loaded_model.transform(predict)[0][1],
            "dt_voted": loaded_model.transform(predict)[0][2],
            "rf_voted": loaded_model.transform(predict)[0][3],
        }

        return Response(res)
