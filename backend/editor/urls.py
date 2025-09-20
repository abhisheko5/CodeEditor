from django.urls import path
from . import views

urlpatterns = [
    path("hi/", views.hi),
    path("run/", views.run_code, name="run_code"),
    path("files/<int:file_id>/open/", views.open_file, name="open_file"),



]