<template>
    <section class="text-gray-600 body-font">
        <div
            class="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center"
        >
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            >
                <h1
                    class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
                >
                    Welcome to Vue Authentication
                    <br class="hidden lg:inline-block" />
                    with Laravel 10
                </h1>
                <p class="mb-8 leading-relaxed">
                    A simple task application made with Vue and Laravel, to
                    learn how to implement authentication with BreezeApi in an
                    external Vue project and use laravel in api mode for the
                    backend.
                </p>
                <div class="flex justify-center">
                    <router-link
                        :to="{ name: 'Register' }"
                        class="inline-flex text-white bg-sky-800 hover:bg-sky-900 order-0 py-2 px-6 focus:outline-none rounded text-lg transition-colors ease-in-out"
                    >
                        Go to register
                    </router-link>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    class="object-cover object-center rounded-xl"
                    alt="hero"
                    src="../assets/hero-home.jpg"
                />
            </div>
        </div>
    </section>
</template>
