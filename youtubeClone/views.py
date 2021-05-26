from django.shortcuts import render
from django.http import HttpResponse

def showMain(request):
  return render(request, 'youtubeClone/main.html')

def showExplore(request):
  return render(request, 'youtubeClone/explore.html')

