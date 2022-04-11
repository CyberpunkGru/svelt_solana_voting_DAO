<script>
    import { Link } from 'svelte-navigator';
    import ModalComp from './ModalComp.svelte';
    import { walletAddress, walletAddressShort } from '../store/store.js';
    import { disconnectPhantom } from '../apis/disconnectPhantom';

    export let windDetail;
    let wallet_address = null;
    let wallet_address_short = null;

    walletAddress.subscribe((value) => {
        wallet_address = value;
        wallet_address ? console.log(wallet_address) : null;
    });

    walletAddressShort.subscribe((value) => {
        wallet_address_short = value;
        wallet_address_short ? console.log(wallet_address_short) : null;
    });

    const handleClick = () => {
        disconnectPhantom();
        if (window['solana']?.isPhantom) {
            localStorage.removeItem('wallet_address');
            walletAddress.set('');
            console.log('Wallet has been Disconnected.');
        }
    };
</script>

<nav class="navbar navbar-expand-lg navbar-light pt-0 d-none d-lg-block">
    <div class="container-fluid">
        <a class="navbar-brand up" href="/">
            <img src="assets/images/Logo.png" alt="logo" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item me-lg-3">
                    <Link to="/bylaws">
                        <span class="nav-link px-4 py-1 primary-animation">
                            <span class="up">BYLAWS</span>
                        </span>
                    </Link>
                </li>
                {#if wallet_address}
                    <li class="nav-item">
                        <button
                            on:click={handleClick}
                            class="nav-link px-4 py-1 border-0 walletButton primary-animation"
                        >
                            <span class="up online" />
                            <span class="up text-white">WALLET</span>
                            <span
                                >{wallet_address_short
                                    ? `(${wallet_address_short})`
                                    : ''}</span
                            >
                        </button>
                    </li>
                {:else}
                    <li class="nav-item">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#walletsModal"
                            class="nav-link px-4 py-1 border-0 primary-animation"
                        >
                            <span class="up">CONNECT WALLET</span>
                        </button>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light pt-3 d-lg-none">
    <div class="container-fluid mobile-nav">
        <div class="nav-item me-lg-3">
            <Link to="/bylaws"
                ><span class="nav-link px-4 py-1">
                    <span class="up">BYLAWS</span>
                </span></Link
            >
        </div>
        {#if windDetail}
            <a class="up" href="/">
                <img src="assets/images/Logo.png" alt="logo" />
            </a>
        {/if}
        <div class="nav-item">
            <button
                data-bs-toggle="modal"
                data-bs-target="#walletsModalMobile"
                class="nav-link px-4 py-1 border-0"
            >
                <span class="up">CONNECT</span>
            </button>
        </div>
    </div>
</nav>

<ModalComp
    id="walletsModal"
    headingTitle="CONNECT YOUR WALLET"
    connectButtons
/>

<style>
    .navbar {
        background-color: transparent;
    }
    .nav-link {
        background: #1a1b1c;
        box-shadow: -4px -4px 4px rgba(109, 109, 109, 0.5), 4px 4px 4px #060c18;
        border-radius: 60px;
        color: #c9c9c9 !important;
        font-weight: 900;
    }
    .walletButton {
        font-weight: 400;
    }
    .mobile-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .online {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: #39ffa0;
        border-radius: 50%;
        position: relative;
        right: 9px;
    }
</style>
