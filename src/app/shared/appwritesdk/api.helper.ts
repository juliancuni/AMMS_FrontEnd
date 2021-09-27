import { Appwrite } from 'appwrite';
import { environment } from '../../../environments/environment';
export class ApiHelper {
    private static sdk: Appwrite | null;

    static provider() {
        if (!this.sdk) {
            let sdk = new Appwrite();
            sdk
                .setEndpoint(environment.APPWRITE_ENDPOINT)
                .setProject(environment.APPWRITE_PROJECTID);
            this.sdk = sdk;
        }
        return this.sdk
    }
}