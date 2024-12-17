<script>
    import { Router, Route } from 'svelte-routing';
    import Homepage from './lib/pages/Home.svelte';
    import NotFound from './lib/pages/NotFound.svelte';
    import TermsAndConditions from './lib/pages/TermsAndConditions.svelte';
    import Footer from './lib/shared/Footer.svelte';
    import Tassadapi from './lib/pages/Tassadapi.svelte';
    import TassadapiModels from './lib/tassadapi/TassadapiModels.svelte';
    import TassadapiEndpoints from './lib/tassadapi/TassadapiEndpoints.svelte';
    import Language from './lib/tassadapi/models/Language.svelte';
    import { isLoading } from 'svelte-i18n';
    import Loader from './lib/shared/Loader.svelte';
    import Build from './lib/tassadapi/models/Build.svelte';
    import Category from './lib/tassadapi/models/Category.svelte';
    import File from './lib/tassadapi/models/File.svelte';
    import Set from './lib/tassadapi/models/Set.svelte';
    import Card from './lib/tassadapi/models/Card.svelte';
    import CardLegality from './lib/tassadapi/models/CardLegality.svelte';
    import CardLight from './lib/tassadapi/models/CardLight.svelte';
    import SubscriptionProductTranslationFeature
        from './lib/tassadapi/models/SubscriptionProductTranslationFeature.svelte';
    import SubscriptionProductTranslation from './lib/tassadapi/models/SubscriptionProductTranslation.svelte';
    import Subscription from './lib/tassadapi/models/Subscription.svelte';
    import SubscriptionProduct from './lib/tassadapi/models/SubscriptionProduct.svelte';
    import CardPrint from './lib/tassadapi/models/CardPrint.svelte';
    import CardPrintFace from './lib/tassadapi/models/CardPrintFace.svelte';
    import CardPrintImageUri from './lib/tassadapi/models/CardPrintImageUri.svelte';
    import CardPrintPrice from './lib/tassadapi/models/CardPrintPrice.svelte';
    import CardPrintPurchaseUri from './lib/tassadapi/models/CardPrintPurchaseUri.svelte';
    import CardPrintRelatedUri from './lib/tassadapi/models/CardPrintRelatedUri.svelte';
    import CardPrintTranslation from './lib/tassadapi/models/CardPrintTranslation.svelte';
    import Deck from './lib/tassadapi/models/Deck.svelte';
    import DeckLight from './lib/tassadapi/models/DeckLight.svelte';
    import DeckCard from './lib/tassadapi/models/DeckCard.svelte';
    import DeckCardRelatedCardPrint from './lib/tassadapi/models/DeckCardRelatedCardPrint.svelte';
    import DeckCategory from './lib/tassadapi/models/DeckCategory.svelte';
    import User from './lib/tassadapi/models/User.svelte';
    import AccessToken from './lib/tassadapi/models/AccessToken.svelte';
    import Auth from './lib/tassadapi/endpoints/Auth.svelte';
    import Contact from './lib/tassadapi/endpoints/Contact.svelte';
    import ResetPassword from './lib/tassadapi/endpoints/ResetPassword.svelte';
    import TermsAndConditionsEndpoint from './lib/tassadapi/endpoints/TermsAndConditions.svelte';
    import Profile from './lib/tassadapi/endpoints/Profile.svelte';
    import Subscribed from './lib/tassadapi/endpoints/Subscribed.svelte';
    import DeckEndpoint from './lib/tassadapi/endpoints/Deck.svelte';
    import Processing from './lib/tassadapi/endpoints/Processing.svelte';
    import ProcessedCard from './lib/tassadapi/models/ProcessedCard.svelte';
    import LegalNotice from './lib/pages/LegalNotice.svelte';
    import CardSearch from './lib/tassadapi/endpoints/CardSearch.svelte';
    import CardPrintEndpoint from './lib/tassadapi/endpoints/CardPrint.svelte';
    import NewDeck from './lib/tassadapi/endpoints/NewDeck.svelte';
    import EditDeck from './lib/tassadapi/endpoints/EditDeck.svelte';
    import FrontClient from './lib/tassadapi/models/FrontClient.svelte';
    import FrontClientEndpoint from './lib/tassadapi/endpoints/FrontClient.svelte';
    import CreateAccount from './lib/tassadapi/endpoints/CreateAccount.svelte';

    export let url = '';
</script>

<main class="flex flex-col min-h-screen min-w-screen bg-gray-200 dark:bg-gray-900">
    <div class="px-3.5 min-h-screen">
        {#if !$isLoading}
            <Router {url}>
                <Route path="/"><Homepage /></Route>
                <Route path="/legal-notice"><LegalNotice /></Route>
                <Route path="/terms-and-conditions"><TermsAndConditions /></Route>
                <Route path="/tassadapi"><Tassadapi /></Route>

                <!-- Models documentation part -->
                <Route path="/tassadapi/models"><TassadapiModels /></Route>
                <Route path="/tassadapi/models/language"><Language /></Route>
                <Route path="/tassadapi/models/build"><Build /></Route>
                <Route path="/tassadapi/models/category"><Category /></Route>
                <Route path="/tassadapi/models/file"><File /></Route>
                <Route path="/tassadapi/models/set"><Set /></Route>
                <Route path="/tassadapi/models/card-legality"><CardLegality /></Route>
                <Route path="/tassadapi/models/card"><Card /></Route>
                <Route path="/tassadapi/models/card-light"><CardLight /></Route>
                <Route path="/tassadapi/models/card-print"><CardPrint /></Route>
                <Route path="/tassadapi/models/card-print-face"><CardPrintFace /></Route>
                <Route path="/tassadapi/models/card-print-image-uri"><CardPrintImageUri /></Route>
                <Route path="/tassadapi/models/card-print-price"><CardPrintPrice /></Route>
                <Route path="/tassadapi/models/card-print-purchase-uri"><CardPrintPurchaseUri /></Route>
                <Route path="/tassadapi/models/card-print-related-uri"><CardPrintRelatedUri /></Route>
                <Route path="/tassadapi/models/card-print-translation"><CardPrintTranslation /></Route>
                <Route path="/tassadapi/models/processed-card"><ProcessedCard /></Route>
                <Route path="/tassadapi/models/subscription-product-translation-feature"><SubscriptionProductTranslationFeature /></Route>
                <Route path="/tassadapi/models/subscription-product-translation"><SubscriptionProductTranslation /></Route>
                <Route path="/tassadapi/models/subscription-product"><SubscriptionProduct /></Route>
                <Route path="/tassadapi/models/subscription"><Subscription /></Route>
                <Route path="/tassadapi/models/deck"><Deck /></Route>
                <Route path="/tassadapi/models/deck-light"><DeckLight /></Route>
                <Route path="/tassadapi/models/deck-card"><DeckCard /></Route>
                <Route path="/tassadapi/models/deck-card-related-card-print"><DeckCardRelatedCardPrint /></Route>
                <Route path="/tassadapi/models/deck-category"><DeckCategory /></Route>
                <Route path="/tassadapi/models/user"><User /></Route>
                <Route path="/tassadapi/models/access-token"><AccessToken /></Route>
                <Route path="/tassadapi/models/front-client"><FrontClient /></Route>

                <!-- Models documentation part -->
                <Route path="/tassadapi/end-points"><TassadapiEndpoints /></Route>
                <Route path="/tassadapi/end-points/create-account"><CreateAccount /></Route>
                <Route path="/tassadapi/end-points/auth"><Auth /></Route>
                <Route path="/tassadapi/end-points/contact"><Contact /></Route>
                <Route path="/tassadapi/end-points/reset-password"><ResetPassword /></Route>
                <Route path="/tassadapi/end-points/terms-and-conditions"><TermsAndConditionsEndpoint /></Route>
                <Route path="/tassadapi/end-points/profile"><Profile /></Route>
                <Route path="/tassadapi/end-points/subscribed"><Subscribed /></Route>
                <Route path="/tassadapi/end-points/deck"><DeckEndpoint /></Route>
                <Route path="/tassadapi/end-points/new-deck"><NewDeck /></Route>
                <Route path="/tassadapi/end-points/edit-deck"><EditDeck /></Route>
                <Route path="/tassadapi/end-points/processing"><Processing /></Route>
                <Route path="/tassadapi/end-points/card/search"><CardSearch /></Route>
                <Route path="/tassadapi/end-points/card/print"><CardPrintEndpoint /></Route>
                <Route path="/tassadapi/end-points/front-client"><FrontClientEndpoint /></Route>

                <Route path="*"><NotFound /></Route>
            </Router>
        {:else}
            <Loader loading={true} />
        {/if}
    </div>
    <Footer />
</main>
