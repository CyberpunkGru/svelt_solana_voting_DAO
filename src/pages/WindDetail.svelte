<script>
    import Wind from '../components/Wind.svelte';
    import { Container } from 'sveltestrap';
    import Header from '../components/Header.svelte';
    import VoteProgress from '../components/VoteProgress.svelte';
    import ModalComp from '../components/ModalComp.svelte';

    let item = {
        heading: 'Exile the exiled',
        author: 'oxeu...q093',
        status: 11,
        ending_time: '01:01:15:36',
    };
</script>

<Header windDetail />
<Container fluid>
    <Container>
        <div class="row mt-5">
            <Wind wind={item} index={1} detail />
            <div class="col-lg-4 px-0 px-lg-3 mt-4">
                <!--for Box-->
                <!--for large screen-->
                <span class="d-none d-lg-block">
                    <div class="box py-lg-3 text-center">
                        <div class="time pt-3 pb-3 up">
                            Voting Ends In {item.ending_time}
                        </div>
                        <div class="votes pb-3 up">
                            ({item.status} Votes Needed to Pass)
                        </div>
                    </div>
                </span>
                <!--for small screen-->
                <span class="d-lg-none">
                    <div class="box py-lg-3">
                        <div class="time pt-2 pb-2 text-center up">
                            Voting Ends In {item.ending_time}
                        </div>
                    </div>

                    <div class="votes pt-4 text-center up">
                        ({item.status} Votes Needed to Pass)
                    </div>
                </span>
                <!--for Progress Bar-->
                <VoteProgress passedVotes={5} rejectedVotes={3} />

                <div class="text-center text-pass up">
                    YOU VOTED TO PASS THIS WIND
                </div>
                <!-- <div class="text-center text-reject up">
                    YOU VOTED TO REJECT THIS WIND
                </div> -->

                <button
                    data-bs-toggle="modal"
                    data-bs-target="#votePassModal"
                    class="button pass-color mt-3"
                >
                    <span class="up"> Vote to Pass </span>
                </button>
                <ModalComp
                    id="votePassModal"
                    headingTitle="YOU ARE VOTING TO PASS"
                    headingColor="#39FFA0"
                    text="In order to cast this vote you will need to stake one Ape Token for the duration of the vote. You will not be able to sell, transfer or breed this Ape as long as it is staked."
                    button="STAKE MY APE"
                />

                <button
                    data-bs-toggle="modal"
                    data-bs-target="#voteRejectModal"
                    class="button reject-color mt-3"
                >
                    <span class="up"> Vote to Reject </span>
                </button>
                <ModalComp
                    id="voteRejectModal"
                    headingTitle="YOU ARE VOTING TO REJECT"
                    headingColor="#FF3797"
                    text="In order to cast this vote you will need to stake one Ape Token for the duration of the vote. You will not be able to sell, transfer or breed this Ape as long as it is staked."
                    button="STAKE MY APE"
                />

                <div class="mind pt-4 text-center up">Changed your mind?</div>
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#voteRescindModal"
                    class="button black-color text-white primary-animation mt-3"
                >
                    <span class="up"> Rescind Vote </span>
                </button>
                <ModalComp
                    id="voteRescindModal"
                    headingTitle="ARE YOU SURE YOU WANT TO RESCIND YOUR VOTE?"
                    text="(Your staked Ape Token will be returned to your wallet)"
                    button="RESCIND"
                />
            </div>
            <!--for Big Box-->
            <div class="col-lg-8 px-0 px-lg-3 mt-4">
                <div class="desc-box px-3 px-lg-5 py-3 py-lg-4 mt-5 mt-md-0">
                    <div class="document up pt-3 pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec cursus tortor. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. In massa dui, congue ut
                        nisi vel, accumsan interdum lacus. Mauris gravida, erat
                        ut volutpat ornare, nisl nisi sagittis quam, sed
                        volutpat libero eros ut felis. Aenean id purus vel lacus
                        molestie commodo vitae sit amet dui. Vestibulum justo
                        quam, ullamcorper sit amet nunc ullamcorper, varius
                        tincidunt mi. Aliquam interdum metus et tortor auctor
                        faucibus ut ut mauris. Curabitur ac neque malesuada,
                        consectetur mi et, sagittis tellus. Curabitur tincidunt
                        lacus sed mollis tempor.
                        <br /><br />
                        Vivamus at ultrices lectus. Nullam vulputate arcu id semper
                        aliquam. Quisque id nisi consectetur, sodales neque quis,
                        fringilla velit. Mauris fringilla sollicitudin urna vel consequat.
                        Ut faucibus quis dui eget sagittis. Donec blandit, metus
                        a luctus placerat, tellus massa porttitor mauris, vel vehicula
                        arcu ex sed sapien. Etiam ullamcorper suscipit felis, lacinia
                        commodo nibh venenatis at. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Etiam facilisis at lectus
                        sit amet tincidunt. Proin et aliquam ligula. Donec mattis
                        ac arcu quis pretium. Nulla tempor nulla neque, vel accumsan
                        diam convallis vitae. Donec ac facilisis purus. Donec blandit
                        lectus at hendrerit porta. Quisque accumsan rutrum neque
                        porta fringilla. In hac habitasse platea dictumst.
                        <br /><br />
                        Aliquam faucibus ante at elit accumsan, eget tristique lacus
                        maximus. Quisque maximus turpis quis convallis laoreet. Nam
                        gravida, magna non scelerisque tincidunt, massa mi convallis
                        enim, et semper tellus augue tincidunt odio. Duis accumsan
                        luctus lacinia. Pellentesque nec interdum ante. Vestibulum
                        tempor, leo ut iaculis pretium, quam quam condimentum dui,
                        id ullamcorper dui ipsum vitae nisi. In hac habitasse platea
                        dictumst. Morbi et ullamcorper ligula, ut convallis massa.
                        Fusce ac nisi non libero euismod ornare. Maecenas blandit
                        velit et justo finibus, eget lacinia augue sollicitudin.
                        Aenean vestibulum id purus ac lacinia.
                        <br /><br />
                        Phasellus sed neque eu velit finibus blandit scelerisque
                        id sapien. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas. Curabitur
                        a molestie diam. Fusce sagittis interdum elit ac venenatis.
                        Morbi sapien urna, aliquet a suscipit id, pellentesque eget
                        orci. Nam pharetra faucibus elit ac tincidunt. Phasellus
                        pretium ac nisi aliquet placerat. Pellentesque iaculis elit
                        vel eleifend rutrum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed scelerisque neque et dolor vehicula
                        finibus. Phasellus finibus consectetur est, ut cursus erat
                        laoreet id. Nulla feugiat cursus ligula, sit amet efficitur
                        justo tempus at.
                    </div>
                </div>
            </div>
        </div>
    </Container>
</Container>

<style>
    .box {
        background: #1a1b1c;
        box-shadow: -4px -4px 4px rgba(109, 109, 109, 0.5), 4px 4px 4px #060c18;
        border-radius: 42px;
    }
    .desc-box {
        background: #1a1b1c;
        box-shadow: -4px -4px 4px rgba(109, 109, 109, 0.5), 4px 4px 4px #060c18;
        border-radius: 42px;
    }
    .time {
        color: #ffffff;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .votes {
        color: #898989;
        font-size: 0.8rem;
    }
    .mind {
        color: #898989;
    }
    .document {
        color: #ffffff;
        font-weight: 300;
        font-size: 0.7rem;
    }
    .text-pass {
        padding: 3rem;
        font-size: 1.8rem;
        font-family: 'azo-sans-uber';
        color: #39ffa0;
    }
    .text-reject {
        padding: 3rem;
        font-size: 1.8rem;
        font-family: 'azo-sans-uber';
        color: #ff3797;
    }
    @media (max-width: 768px) {
        .desc-box {
            border-radius: 20px;
        }
        .document {
            font-size: 0.9rem;
        }
    }
</style>
