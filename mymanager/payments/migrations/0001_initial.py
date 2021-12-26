# Generated by Django 4.0 on 2021-12-26 15:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conge_paye', models.FloatField(null=True)),
                ('conge_non_paye', models.FloatField(null=True)),
                ('restaurant', models.IntegerField(null=True)),
                ('transport', models.IntegerField(null=True)),
                ('retraite', models.DecimalField(decimal_places=4, max_digits=9)),
                ('delivrance_date', models.DateField()),
                ('taxes', models.FloatField()),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.users')),
            ],
        ),
    ]
