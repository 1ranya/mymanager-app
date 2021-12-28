from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_cin_length(value):
    if len(value) < 14:
        raise ValidationError(
            _('Value indicated is not complete!')
        )

def validate_ss_length(value):
    if len(value) < 15:
        raise ValidationError(
            _('Value indicated is not complete!')
        ) 

class Users(models.Model):

    # Contract  field Choices
    CONTRACTS = [('CDD', 'CDD'), ('CDI', 'CDI'), ('Stage', 'Stage'), ('Alternance', 'Alternance')]
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    cin = models.PositiveBigIntegerField()
    securite_sociale = models.PositiveBigIntegerField()
    email = models.EmailField(max_length=254)
    adresse = models.CharField(max_length=200)
    start_date = models.DateField()
    is_admin = models.BooleanField(default=True)
    is_intern = models.BooleanField(default=True)
    contract = models.CharField(choices=CONTRACTS, max_length=20, default='CDI')
    phone = models.BigIntegerField()
    salary = models.DecimalField(max_digits=5, decimal_places=4)

    def __str__(self):
        return 'name: ' + self.first_name
