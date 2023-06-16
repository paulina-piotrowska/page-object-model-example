describe("Doctors page", () => {
	beforeEach(async () => {
		await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
	});

	it("Check page title", async () => {
		await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
	});


	it("Open modal widow for adding a new doctor", async () => {
		// click on "Doctors" button in the side menu
		await $("[routerLink='/doctors']").click();

		// click on "Add New Doctor" button
		await $(".specialization-types button.e-control").click();

		// check that modal window is diplayed
		await expect($('.new-doctor-dialog')).toBeDisplayed();
	});

	it("Add new Doctor", async () => {
		// click on "Doctors" button in the side menu
		await $("[routerLink='/doctors']").click();

		// click on "Add New Doctor" button
		await $(".specialization-types button.e-control").click();

		// wait for visibility of modal window
		await ($(".new-doctor-dialog")).waitForDisplayed();

		// fill in all required fields ("Doctor Name", "Mobile Number", "Email", "Education")
		await $("[name='Name']").setValue("John Doe");
		await $("#DoctorMobile").setValue("+123456789012");
		await $("[name='Email").setValue("test@test.com");
		await $("[name='Education").setValue("Basic");
		await $("[name='Designation").setValue("Test");

		// click on "Submit" button
		await $(".e-footer-content button.e-primary").click();
		await expect($('.new-doctor-dialog')).not.toBeDisplayed();

		// check that new Doctor with name and education has been added
		await expect($("#Specialist_8").$(".name")).toHaveText("Dr. John Doe");
		await expect($("#Specialist_8").$(".education")).toHaveText("Basic", {ignoreCase: true});
	});

	it("Close modal window", async () => {
		await $("[routerLink='/doctors']").click();
		await $(".specialization-types button.e-control").click();
		await $(".new-doctor-dialog").waitForDisplayed();
		await $(".new-doctor-dialog .e-dlg-closeicon-btn"). click();
		await expect($(".new-doctor-dialog")).not.toBeDisplayed();
	});
})