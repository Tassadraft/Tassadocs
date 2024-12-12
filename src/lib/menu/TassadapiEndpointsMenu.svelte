<script>
    import FlagMenu from './FlagMenu.svelte';
    import Subtitle from '../shared/Subtitle.svelte';
    import ApiDocMenu from './ApiDocMenu.svelte';
    import MenuItem from './MenuItem.svelte';
    import Panel from '../shared/Panel.svelte';
    import Title from '../shared/Title.svelte';
    import { t } from 'svelte-i18n';
    import { raw } from '../../service/stringService.js';
    import Switch from '../shared/Switch.svelte';
    import ThemeSwitch from '../shared/ThemeSwitch.svelte';
    import { onMount } from 'svelte';

    export let title;
    export let description = null;
    export let isLogged = false;
    export let isSubscribed = false;

    onMount(() => {
        isLogged = localStorage.getItem('isLogged') === 'true';
        isSubscribed = localStorage.getItem('isSubscribed') === 'true';
    });

    const handleLoggedChanged = () => {
        localStorage.setItem('isLogged', String(isLogged));
        if (!isLogged) {
            isSubscribed = false;
            localStorage.setItem('isSubscribed', 'false');
        }
    };

    const handleSubscribedChanged = () => {
        localStorage.setItem('isSubscribed', String(isSubscribed));
        if (isSubscribed) {
            isLogged = true;
            localStorage.setItem('isLogged', 'true');
        }
    };
</script>

<ApiDocMenu>
    <div slot="menu" class="mt-3">
        <MenuItem iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
        <MenuItem iconLeft="structure" href="/tassadapi/models">{$t('menu.models')}</MenuItem>
        <div class="mt-3">
            <div class="m-3">
                <Subtitle>{$t('menu.end-points')}</Subtitle>
            </div>
            <Panel>
                <MenuItem iconLeft="shield" href="/tassadapi/end-points/auth">{$t('tassadapi.end-points.auth.title')}</MenuItem>
                <MenuItem iconLeft="password" href="/tassadapi/end-points/reset-password">{$t('tassadapi.end-points.reset-password.title')}</MenuItem>
                <MenuItem iconLeft="user" href="/tassadapi/end-points/profile">{$t('tassadapi.end-points.profile.title')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="pen" href="/tassadapi/end-points/contact">{$t('tassadapi.end-points.contact.title')}</MenuItem>
                <MenuItem iconLeft="password" href="/tassadapi/end-points/terms-and-conditions">{$t('tassadapi.end-points.terms-and-conditions.title')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="price" href="/tassadapi/end-points/subscribed">{$t('tassadapi.end-points.subscribed.title')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="stack" href="/tassadapi/end-points/deck">{$t('tassadapi.end-points.deck.title')}</MenuItem>
                <MenuItem iconLeft="stack" href="/tassadapi/end-points/new-deck">{$t('tassadapi.end-points.new-deck.title')}</MenuItem>
                <MenuItem iconLeft="stack" href="/tassadapi/end-points/edit-deck">{$t('tassadapi.end-points.edit-deck.title')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="stack" href="/tassadapi/end-points/processing">{$t('tassadapi.end-points.process.title')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/end-points/card/search">{$t('tassadapi.end-points.card.search.title')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/end-points/card/print">{$t('tassadapi.end-points.card.prints.title')}</MenuItem>
            </Panel>
        </div>
    </div>
    <div slot="content">
        <div class="flex justify-between">
            <Title {title} />
            <div class="flex gap-10 items-center">
                <div class="flex gap-10 mb-2">
                    <ThemeSwitch />
                    <Switch bind:value={isLogged} size={4} label={$t('common.logged')} on:change={handleLoggedChanged} />
                    <Switch bind:value={isSubscribed} size={4} label={$t('common.subscribed')} on:change={handleSubscribedChanged} />
                </div>
                <FlagMenu />
            </div>
        </div>

        {#if description}
            <Panel>
                <p>{@html raw(description)}</p>
            </Panel>
        {/if}
        <slot />
    </div>
</ApiDocMenu>
