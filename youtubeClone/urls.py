from django.urls import path
from . import views

app_name = 'base'

urlpatterns = [
  path('', views.showMain, name='home'),
  path('explore/', views.showExplore, name='explore'),
]