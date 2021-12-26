from django.db import models

class Payment(models.Model):
    user_id=models.ForeignKey(
        'users.Users',
        on_delete=models.CASCADE,
    )
    conge_paye=models.FloatField(null=True)
    conge_non_paye=models.FloatField(null=True)
    restaurant=models.IntegerField(null=True)
    transport=models.IntegerField(null=True)
    retraite=models.DecimalField(max_digits=9, decimal_places=4)
    delivrance_date=models.DateField()
    taxes=models.FloatField()


    # def __str__(self):
    #     return 'id: ' + self.first_name