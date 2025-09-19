import requests
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view


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



