import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {
    $refs!: {
        whoBox: HTMLBodyElement,
        whatBox: HTMLBodyElement
    };
    clientPanel: boolean[] = [true];
    candidatePanel: boolean[] = [false];

    name: string = "";
    email: string = "";
    subject: string = "";
    message: string = "";

    getBackground(panel: boolean) {
        if (!panel) {
            return "transparent";
        }
    }
}