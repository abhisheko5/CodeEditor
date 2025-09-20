from django.contrib import admin

from .models import Project,File  # import the model you want to manage

admin.site.register(Project)
admin.site.register(File)

# Register your models here.
