from django.db import models

# Create your models here.
# Create your models here.
class Band(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200)
    email=models.EmailField()
    genre=models.CharField(max_length=200) # comma-separated
    founded_in = models.IntegerField()
    location = models.CharField(max_length=200)
    def __str__(self):
        return f"{self.name} ({self.location})"

class Club(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200)
    email=models.EmailField()
    genre=models.CharField(max_length=200) # comma-separated
    address=models.CharField(max_length=200)
    def __str__(self):
        return f"{self.name} ({self.address})"

class Event(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    club_id= models.ForeignKey(Club, on_delete=models.CASCADE)
    band_id= models.ManyToManyField(Band)
    date = models.DateField()
    def __str__(self):
        return f"{self.name} ({self.description})"
