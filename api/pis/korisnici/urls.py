from django.urls import path
from .views import registerUsers, loginUsers, userLogout

urlpatterns = [
    path('registracija/', registerUsers),
    path('prijava/', loginUsers),
    path('odjava/', userLogout)

]