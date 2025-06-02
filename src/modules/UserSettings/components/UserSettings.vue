<script setup lang="ts">
import { ref } from 'vue'
import UserSettingsEdit from './EditProfile/UserSettingsEdit.vue'
import UserPref from './Preferences/UserPref.vue'
import UserSecurity from './Security/UserSecurity.vue'

const activeTab = ref('edit')

const tabs = [
    { id: 'edit', label: 'Edit Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'security', label: 'Security' },
]
</script>

<template>
    <div class="rounded-[15px] bg-white p-5 md:p-7 lg:rounded-[20px]">
        <div class="mb-2.5 flex gap-3 md:gap-10">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                type="button"
                @click="activeTab = tab.id"
                :class="['mb-5 shrink-0 cursor-pointer border-b-3 px-1 py-4  font-medium', activeTab === tab.id ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
            >
                {{ tab.label }}
            </button>
        </div>
        <UserSettingsEdit v-show="activeTab == 'edit'" />
        <UserPref v-show="activeTab == 'preferences'" />
        <UserSecurity v-show="activeTab == 'security'" />
    </div>
</template>
