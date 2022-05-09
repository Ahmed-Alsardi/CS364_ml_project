export interface DiabeteRequest {
  predict: {
    pregnancies: number;
    glucose: number;
    bloodpressure: number;
    bmi: number;
    diabetespedigreefunction: number;
    age: number;
  }
}

export interface DiabeteResponse {
  result: number,
  knn_voted: number,
  nb_voted: number,
  dt_voted: number,
  rf_voted: number,
}

