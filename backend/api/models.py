# Create your models here.
from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.
class RandomUser(models.Model):
    class Meta:
        db_table = 'random_user'
        verbose_name = 'API user'
        verbose_name_plural = 'API users'

    gender = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('male'),
    )
    nat = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('AU'),
    )
    title = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('mr'),
    )
    fname = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('John'),
    )
    lname = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('Doe')
    )
    phone = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('+4411 2358 13 21')
    )
    email = models.EmailField(
        max_length=255,
        blank= False,
        null = False,
        default = _('email@example.com')
    )
    def __str__(self):
        return self.fname

