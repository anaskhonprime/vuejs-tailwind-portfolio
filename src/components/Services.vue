<template>
  <div class="bg-green-50 hidden lg:flex lg:items-center lg:justify-center">
    <div class="bg-green-50 page-section features">
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -150 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1000"
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <lord-icon
                  src="https://cdn.lordicon.com/fyuvwkhk.json"
                  trigger="hover"
                  style="width: 150px; height: 150px"></lord-icon>
              </div>
              <div>
                <h>Front End</h>
                <p>
                  I like to craft solid and scalable frontend products with
                  great user experiences.
                </p>
              </div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1200"
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="">
                <div class="img-fluid mr-3">
                  <lord-icon
                    src="https://cdn.lordicon.com/rvulxkpr.json"
                    trigger="hover"
                    style="width: 150px; height: 150px"></lord-icon>
                </div>
              </div>
              <div>
                <h4>Blockchain</h4>
                <p>
                  I also learn and work as Blockchain & Smart Contract
                  freelancer developer.
                </p>
              </div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 150 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1400"
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <lord-icon
                  src="https://cdn.lordicon.com/hyymuwkm.json"
                  trigger="hover"
                  style="width: 150px; height: 150px"></lord-icon>
              </div>
              <div>
                <h5>Mobile Apps</h5>
                <p>
                  I also highly interested in Native & Hybrid mobile app
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
