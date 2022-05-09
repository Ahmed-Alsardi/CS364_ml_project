from django.urls import path
from . import views


urlpatterns = [
    path('predict/', views.PredictApiView.as_view())
]