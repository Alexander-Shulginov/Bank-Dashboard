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
    <div class="bg-white lg:rounded-[20px] rounded-[15px] p-5 md:p-7">
        <div class="mb-2.5 flex gap-4 md:gap-10">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                type="button"
                @click="activeTab = tab.id"
                :class="['mb-5 shrink-0 cursor-pointer pb-1 font-medium transition-colors md:mb-12', activeTab === tab.id ? 'border-accent text-accent border-b-3' : 'text-board']"
            >
                {{ tab.label }}
            </button>
        </div>
        <UserSettingsEdit v-show="activeTab == 'edit'" />
        <UserPref v-show="activeTab == 'preferences'" />
        <UserSecurity v-show="activeTab == 'security'" />
    </div>
</template>
