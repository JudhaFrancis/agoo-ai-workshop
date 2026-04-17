<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full antialiased font-inter">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>AI in Daily Work: Prompts, Productivity & Automation | Agoo Technology</title>
        <meta name="description" content="Join our 2-hour live interactive workshop and master AI tools for daily work success. Save hours daily with practical AI skills.">

        <!-- Icons -->
        <link rel="icon" href="/images/logo.png">
        <link rel="shortcut icon" href="/images/logo.png">
        <link rel="apple-touch-icon" href="/images/logo.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="min-h-full flex flex-col font-inter bg-[#F8FAFC]">
        @inertia
    </body>
</html>
