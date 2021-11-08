from django.db import models
from argon2 import PasswordHasher
# Create your models here.

class RegisterUser(models.Model):
    email: models.EmailField()
    password: models.CharField(max_length= 250)
    firstname:models.CharField(max_length=50)
    lastname: models.CharField(max_length=50)
    idnumber: models.IntegerField()
    class Meta:
       managed = True


#     # hashedpass = PasswordHasher()
#     # hashedpass.hash(password)
    