<script>
    export let name = '';
    export let size = 24;

    let IconComponent = null;
    const validIcons = [
        'EnglishFlag',
        'FrenchFlag',
        'Burger',
        'Close',
        'Sun',
        'Moon',
        'OpenSource',
        'ChevronRight',
        'Gavel',
        'Search',
        'Home',
        'Copy',
        'Cloud',
        'Structure',
        'Request',
        'ChevronUp',
        'ChevronDown',
        'Language',
        'Lego',
        'List',
        'File',
        'Package',
        'Card',
        'User',
        'Mastercard',
        'Link',
        'ArrowLeft',
        'Price',
        'Github',
        'Label',
        'Stack',
        'Feature',
    ];

    const toCamelCase = (str) => {
        if (str.length === 0) {
            return '';
        }
        return str[0].toUpperCase() + str.slice(1);
    };

    const setIcon = async (name) => {
        const camelCaseName = toCamelCase(name);
        if (validIcons.includes(camelCaseName)) {
            IconComponent = (await import(`../icons/${camelCaseName}.svelte`)).default;
        } else {
            throw new Error(`Invalid icon name: ${name}`);
        }
    };

    $: {
        setIcon(name);
    }
</script>

{#if IconComponent}
    <svelte:component this={IconComponent} {size} className="transition-all duration-300" />
{/if}
