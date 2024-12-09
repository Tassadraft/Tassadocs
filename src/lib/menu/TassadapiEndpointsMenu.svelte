<script>
    import FlagMenu from './FlagMenu.svelte';
    import Subtitle from '../shared/Subtitle.svelte';
    import ApiDocMenu from './ApiDocMenu.svelte';
    import MenuItem from './MenuItem.svelte';
    import Panel from '../shared/Panel.svelte';
    import Title from '../shared/Title.svelte';
    import { t } from 'svelte-i18n';
</script>

<ApiDocMenu>
    <div slot="menu">
        <MenuItem iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
        <div class="mt-3">
            <div class="m-3">
                <Subtitle>{$t('menu.end-points')}</Subtitle>
            </div>

        </div>
    </div>
    <div slot="content">
        <div class="flex justify-between">
            <Title {title} />
            <FlagMenu />
        </div>

        {#if description}
            <Panel>
                <p>{@html description}</p>
            </Panel>
        {/if}
        <slot />
    </div>
</ApiDocMenu>
