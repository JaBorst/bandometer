from rest_framework import serializers
from .models import Band, Club, Event   

class BandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Band
        fields = ('id', 'name','email','genre','founded_in','location')

class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ('id', 'name','email','genre','address')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name','description','club_id','band_id', 'date')