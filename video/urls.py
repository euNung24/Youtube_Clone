from django.urls import path
from . import views

app_name = 'video'

urlpatterns = [
  path('', views.video_list, name='list'),
  path('new/', views.video_new, name='new'),
  path('<int:video_id>/', views.video_detail, name='detail'),
  path('storageBox/', views.storageBox, name='storageBox')
]