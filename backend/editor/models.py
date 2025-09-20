from django.db import models


class Project(models.Model):
  name=models.CharField(max_length=20)
  created_at=models.DateTimeField(auto_now_add=True)

class File(models.Model):
    project = models.ForeignKey(Project, related_name="files", on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    content = models.TextField(blank=True)  # stores the code
    is_folder = models.BooleanField(default=False)
    parent = models.ForeignKey("self", null=True, blank=True, related_name="children", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)