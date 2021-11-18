export const dateProcessing = {
    data() {
        return {
            dateFormatting: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
            dateNoYearFormatting: { weekday: 'long', month: 'long', day: 'numeric'},
            timeFormatting: { hour: "numeric", minute: "2-digit"},
        }
    },
    methods: {
        formatDateUppercase(date) {
            return date.toLocaleDateString("en-US", this.dateFormatting).toUpperCase() + " AT " + date.toLocaleTimeString("en-US", this.timeFormatting)
        },
        formatDateNoYear(date) {
            return date.toLocaleDateString("en-US", this.dateNoYearFormatting) + " at " + date.toLocaleTimeString("en-US", this.timeFormatting)
        },
    }
}