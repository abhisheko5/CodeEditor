import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project,File
from django.contrib import admin



@api_view(['GET'])

def hi(request):
  return Response({"message":"Hello from django"})
# Create your views here.

@api_view(['POST'])
def run_code(request):
    try:
        # Get code data from frontend
        language = request.data.get("language")
        code = request.data.get("code", "")

        default_versions = {
            "python": "3.10.0",
            "javascript": "18.15.0",
            "cpp": "10.2.0",
            "java": "15.0.2"
        }
        file_extensions = {
    "python": "py",
    "javascript": "js",
    "cpp": "cpp",
    "java": "java",
}

        version = default_versions.get(language)
        extension = file_extensions.get(language, "txt")

      
        res = requests.post(
            "https://emkc.org/api/v2/piston/execute",
            json={
                "language": language,
                "version": str(version),
                "files": [{"name": f"main.{extension}", "content": code}],
        
            },
        )

        return Response(res.json())
    except Exception as e:
        return Response({"error": str(e)}, status=500)


@api_view(['GET'])
def open_file(request,file_id):
    try:
        file=File.objects.get(id=file_id,is_folder=True)
        print("file is",file)
        return Response({"id":file.id,"name":file.name,"content":file.content})
    
    except File.DoesNotExist:
        return Response({"error":"File not found"},status=400)


@csrf_exempt
def save_file(request, file_id):
    if request.method == "PUT":
        data = json.loads(request.body)
        content = data.get("content", "")
        file = File.objects.get(id=file_id)
        file.content = content
        file.save()
        return JsonResponse({"message": "File saved"})
