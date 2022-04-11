<script>
    import Wind from '../components/Wind.svelte';
    import { Container } from 'sveltestrap';
    import Header from '../components/Header.svelte';
    import { Popover } from 'sveltestrap';
    import ModalComp from '../components/ModalComp.svelte';

    var hide = true;
    const handleClick = () => {
        hide = !hide;
    };

    let items = [
        {
            heading: 'Exile the exiled',
            author: 'oxeu...q093',
            status: 13,
            ending_time: '01:01:15:36',
        },
        {
            heading: 'Lorem Ipsum',
            author: 'oxeu...q093',
            status: 'passed',
            ending_time: null,
        },
        {
            heading: 'Lorem Ipsum',
            author: 'oxeu...q093',
            status: 'rejected',
            ending_time: null,
        },
        {
            heading: 'Lorem Ipsum',
            author: 'oxeu...q093',
            status: 10,
            ending_time: '01:01:15:36',
        },
    ];
</script>

<Header />
<Container fluid>
    <Container>
        <div class="row mt-5 pt-5">
            <div class="col-12 px-lg-3">
                <span class="heading up">Proposed WINDS</span>

                <span class="question-mark ms-2">
                    <button id="q-mark">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            fill="white"
                            class="bi bi-question-circle"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                            />
                        </svg>
                    </button>
                </span>
                <Popover
                    placement="right"
                    target="q-mark"
                    style="background:transparent;border:none;"
                >
                    <span class="info px-2 py-1 ms-2 info-tip">
                        <span class="up"
                            >(Whiny Impulsive Notable Document)</span
                        >
                    </span>
                </Popover>
            </div>

            <div class="col-12 px-lg-3 mt-3">
                <input
                    placeholder="What is the title of your WIND?"
                    class="title-input"
                    maxlength="100"
                />
            </div>
            <div class="col-12 px-lg-3 mt-3">
                <textarea
                    placeholder="Link to your first  Scrolltum community discussion"
                    class="title-input text-area"
                    rows="12"
                    maxlength="1000"
                />
            </div>
            <div class="col-12 px-lg-3 mt-3">
                <input
                    placeholder="Link to your first  Scrolltum community discussion"
                    class="title-input"
                    maxlength="100"
                />
            </div>
            <div class="col-12 text-center px-lg-3 mt-3">
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#launchWindModal"
                    class="button black-color text-white primary-animation launch-btn"
                >
                    <span class="up">Launch WIND</span>
                </button>
                <ModalComp
                    id="launchWindModal"
                    headingTitle="ARE YOU SURE YOU WANT TO LAUNCH THIS WIND?"
                    button="CONFIRM"
                />
            </div>
        </div>
    </Container>
</Container>

<style>
    .heading {
        color: #ffffff;
        font-size: 1.7rem;
        font-weight: 900;
    }
    .info {
        background: #1a1b1c;
        box-shadow: -4px -4px 4px rgba(109, 109, 109, 0.5), 4px 4px 4px #060c18;
        border-radius: 60px;
        color: #ffffff;
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 18px;
        position: relative;
        bottom: 2px;
    }
    .question-mark {
        position: relative;
        bottom: 17px;
    }
    #q-mark {
        background: transparent;
        border: 0;
        padding: 0;
    }
    @media (max-width: 768px) {
        .info {
            font-size: 0.9rem;
            position: static;
            padding: 10px;
        }
    }
    @media (max-width: 576px) {
        .info-tip {
            float: right;
            bottom: 0;
        }
    }
    .title-input {
        width: 100%;
        background: #1a1b1c;
        box-shadow: -4px -4px 4px rgb(109 109 109 / 50%), 4px 4px 4px #060c18;
        border-radius: 60px;
        border: 0;
        padding: 1rem 2rem;
        font-weight: 700;
        color: #ffffff;
        outline: 0;
    }
    .title-input::placeholder {
        color: #ffffff;
    }
    .text-area {
        border-radius: 42px;
        padding: 1.5rem 2rem;
    }
    .launch-btn {
        padding: 0.8rem;
        height: auto;
        width: 20%;
        font-size: 1.2rem;
    }
</style>
