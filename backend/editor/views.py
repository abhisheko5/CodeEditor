from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['POST'])

def hi(request):
  return Response({"message":"Hello from django"})
# Create your views here.



