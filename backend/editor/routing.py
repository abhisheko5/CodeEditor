# your_app/routing.py
from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/editor/', consumers.EditorConsumer.as_asgi()),
]