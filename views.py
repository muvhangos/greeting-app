from django.shortcuts import render
from .forms import GreetingForm

def greet_users(request):
    greeting1 = greeting2 = ''
    
    if request.method == 'POST':
        form = GreetingForm(request.POST)
        if form.is_valid():
            user1 = form.cleaned_data['user1']
            user2 = form.cleaned_data['user2']
            
            hour = datetime.now().hour
            greet = "Good morning" if hour < 12 else "Good afternoon" if hour < 18 else "Good evening"
            
            greeting1 = f"👋 {greet}, {user1}!"
            greeting2 = f"👋 {greet}, {user2}!"
    else:
        form = GreetingForm()

    return render(request, 'greetings/greeting_form.html', {
        'form': form,
        'greeting1': greeting1,
        'greeting2': greeting2
    })