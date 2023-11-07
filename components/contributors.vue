<template>
    <div>
        <VPTeamMembers size="small" :members="data.contributors.map(ghUserToMember)" />
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { VPTeamMembers } from 'vitepress/theme'

interface GithubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
}

function ghUserToMember(user: GithubUser) {
    return {
        avatar: user.avatar_url,
        name: user.login,
        title: `${user.contributions} contributions`,
        links: [
            { icon: 'github', link: user.html_url },
        ]
    }
}

const data = reactive({
    contributors: [] as GithubUser[],
});

onMounted(async () => {
    const users: GithubUser[] = await (await fetch('https://api.github.com/repos/adfinis/timed-frontend/contributors')).json();
    data.contributors = users;
});
</script>