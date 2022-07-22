function shortNav() {
    return `
    <div id="bottomNav">
    <div id="navContent">
        <div id="navBody">
            <div id="LHSlogo">
                <a href="./navbarTop.html">
                    <img src="https://wassets.hscicdn.com/static/images/logo.png" alt="appLogo">
                </a>

            </div>
            <div id="RHSfeatures">
                <div id="optn1">
                    <!-- left list containing anchor tags -->
                    <!-- ////////attaching links to anchor tag //////////// -->
                    <div class="optnList">
                        <a href="./LiveScore.html">Live Scores</a>
                    </div>
                    <div class="optnList">
                        <a href="">Series</a>
                    </div>
                    <div class="optnList">
                        <a href="">Teams</a>
                    </div>
                    <div class="optnList">
                        <a href="">News</a>
                    </div>
                    <div class="optnList">
                        <a href="">Features</a>
                    </div>
                    <div class="optnList">
                        <a href="">Videos</a>
                    </div>
                    <div class="optnList">
                        <a href="">Stats</a>
                    </div>


                </div>
                <div id="optn2">
                    <!-- rightSide list containing different icons -->
                    <a class="test" href="">
                        <img style="color: inherit; display: flex;text-align: center; height: 32px;margin-top: 3px;"
                            src="https://wassets.hscicdn.com/static/images/fantasy-home.png" alt="fantacyLogo">
                        <div class="anchDiv">Fantasy</div>
                    </a>
                    <div>
                        <div class="anchDiv">Edition IN</div>
                    </div>
                    <div class="iconFrame">

                        <!-- <input type="checkbox" id="dark-mode-toggle">
                        <label for="dark-mode-toggle" class="dark-mode-toggle"></label> -->

                        <i style="color: white;font-size:x-large;" class="fa-solid fa-moon"></i>
                    </div>
                    <div class="iconFrame">
                        <i style="color: white;font-size:x-large;" class="fa-solid fa-bell"></i>
                    </div>
                    <div class="iconFrame">
                        <div>
                            <i style="color: white;font-size:x-large;" class="fa-solid fa-language"></i>
                        </div>
                    </div>
                    <div class="iconFrame">
                        <i class="fa-solid fa-grid"></i>
                    </div>
                    <div class="iconFrame">
                        <i style="color: white;font-size:x-large;" class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

            </div>

        </div>

    </div>


</div>
    `
}
export default shortNav();