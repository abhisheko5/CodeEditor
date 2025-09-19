import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from datetime import datetime

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        print("WebSocket connection attempt")  # Debug line
        self.room_group_name = 'test'

        # Correct parentheses
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
        print("WebSocket connected!")
        
        self.send(text_data=json.dumps({
            'type': 'connection_established',
            'message': "You are now connected"
        }))  # Debug line
        
    def disconnect(self, close_code):
        print(f"WebSocket disconnected: {close_code}")  # Debug line
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )
        
    def receive(self, text_data):
        print(f"Received: {text_data}")  # Debug line
        data = json.loads(text_data)

        # Send to group (so all clients see it)
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',   # Must match the handler method
                'message': data['message'],
                'sender':self.scope["user"].username if self.scope["user"].is_authenticated else "guest",
                "time": datetime.now().strftime("%H:%M")
            }
        )
    
    def chat_message(self, event):
        message = event['message']

        # Broadcast to WebSocket
        self.send(text_data=json.dumps({
            'type': 'chat',
            'message': message,
           'sender': event['sender'],
            "time": event["time"]


        }))
