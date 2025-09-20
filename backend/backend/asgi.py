import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import realtime.routing,editor.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
combined_routes = realtime.routing.websocket_urlpatterns + editor.routing.websocket_urlpatterns

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
           combined_routes
           )
    ),
})