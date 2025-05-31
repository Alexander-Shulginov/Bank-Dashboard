<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import BaseInput from '@/shared/components/ui/BaseInput.vue'
import BaseButton from '@/shared/components/ui/BaseButton.vue'
</script>

<template>
    <div class="grow-2">
        <BaseTitle text="Add New Card" />
        <div class="radius-base bg-white p-4 md:p-8">
            <p class="text-board mb-4 md:mb-6">Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
            <form action="#" class="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2" @submit.prevent>
                <BaseInput type="text" id="card-type" label="Card Type" placeholder="Classic" error-text="Please fill this field" />
                <BaseInput type="text" id="card-name" label="Name On Card" placeholder="My Cards" error-text="Please fill this field" />
                <BaseInput type="password" id="card-number" label="Card Number" placeholder="**** **** **** ****" error-text="Please fill this field" />
                <BaseInput type="text" id="card-date" label="Expiration Date" placeholder="25 January 2025" error-text="Please fill this field" />
                <BaseButton type="submit" text="Save" form="edit-profile" class="place-self-start" />
            </form>
        </div>
    </div>
</template>
