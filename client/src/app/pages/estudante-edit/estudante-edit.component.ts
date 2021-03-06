/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { EstudanteService } from '../../services/estudante.service';
// Import Models
import { Estudante } from '../../domain/escola1_db/estudante';

// START - USED SERVICES
/**
* estudanteService.create
*	@description CRUD ACTION create
*
* estudanteService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* estudanteService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Estudante
 */
@Component({
    selector: 'app-estudante-edit',
    templateUrl: 'estudante-edit.component.html',
    styleUrls: ['estudante-edit.component.css']
})
export class EstudanteEditComponent implements OnInit {
    item: Estudante;
    model: Estudante;
    formValid: Boolean;

    constructor(
    private estudanteService: EstudanteService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Estudante();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.estudanteService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Estudante
     *
     * @param {boolean} formValid Form validity check
     * @param Estudante item Estudante to save
     */
    save(formValid: boolean, item: Estudante): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.estudanteService.update(item).subscribe(data => this.goBack());
            } else {
                this.estudanteService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



