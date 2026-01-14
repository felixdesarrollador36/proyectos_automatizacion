class TimePage {
    constructor(page) {
        this.page = page;
        // Definimos los selectores una sola vez
        this.timeMenuItem = page.locator('text=Time');
        this.timesheetsSubMenu = page.locator('span:has-text("Timesheets")');
        this.attendanceSubMenu = page.locator('span:has-text("Attendance")');
        this.projectInfoSubMenu = page.locator('span:has-text("Project Info")');
        this.toastMessage = page.locator('.oxd-toast');
    }

    async goToTimeModule() {
        await this.timeMenuItem.click();
    }
}
module.exports = { TimePage };