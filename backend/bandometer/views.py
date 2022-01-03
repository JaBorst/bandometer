from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import BandSerializer, ClubSerializer, EventSerializer
from .models import Band, Club, Event  
from rest_framework import generics

# Create your views here.

class BandView(viewsets.ModelViewSet):
    serializer_class = BandSerializer
    queryset = Band.objects.all()

class QueryView(generics.ListAPIView):

    serializer_class = BandSerializer
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        print("WueryView")
        print(self.request)
        queryset = Band.objects.all()
        ids = self.request.query_params.get('id').split(",")
        print(ids)
        if ids is not None and ids!= ["undefined"]:
            queryset = queryset.filter(id__in=ids)
        return queryset


class ClubView(viewsets.ModelViewSet):
    serializer_class = ClubSerializer
    queryset = Club.objects.all()

class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()