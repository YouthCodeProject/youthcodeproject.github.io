export class Repository {
    constructor(
        public id: number,
        public html_url: string,
        public description: string,
        public full_name: string,
        public language: string,
        public license: License
    ) {}
}

class License {
    constructor(
        public key: string,
        public name: string,
        public spdx_id: string,
        public url: string,
        public node_id: string
    ) {}
}
