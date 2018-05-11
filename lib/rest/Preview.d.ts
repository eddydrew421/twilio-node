/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('./preview/AccSecurity');
import BulkExports = require('./preview/BulkExports');
import DeployedDevices = require('./preview/DeployedDevices');
import Domain = require('../base/Domain');
import HostedNumbers = require('./preview/HostedNumbers');
import Marketplace = require('./preview/Marketplace');
import Proxy = require('./preview/Proxy');
import Studio = require('./preview/Studio');
import Sync = require('./preview/Sync');
import TwilioClient = require('./Twilio');
import Understand = require('./preview/Understand');
import Wireless = require('./preview/Wireless');
import { AssistantListInstance } from './preview/understand/assistant';
import { AuthorizationDocumentListInstance } from './preview/hosted_numbers/authorizationDocument';
import { AvailableAddOnListInstance } from './preview/marketplace/availableAddOn';
import { CommandListInstance } from './preview/wireless/command';
import { ExportConfigurationListInstance } from './preview/bulk_exports/exportConfiguration';
import { ExportListInstance } from './preview/bulk_exports/export';
import { FleetListInstance } from './preview/deployed_devices/fleet';
import { FlowListInstance } from './preview/studio/flow';
import { HostedNumberOrderListInstance } from './preview/hosted_numbers/hostedNumberOrder';
import { InstalledAddOnListInstance } from './preview/marketplace/installedAddOn';
import { RatePlanListInstance } from './preview/wireless/ratePlan';
import { ServiceListInstance } from './preview/sync/service';
import { SimListInstance } from './preview/wireless/sim';


/**
 * Initialize preview domain
 */
declare class Preview extends Domain {
  /**
   * Initialize preview domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  readonly acc_security: AccSecurity;
  /**
   * Assistant resource
   */
  readonly assistants: AssistantListInstance;
  /**
   * AuthorizationDocument resource
   */
  readonly authorizationDocuments: AuthorizationDocumentListInstance;
  /**
   * AvailableAddOn resource
   */
  readonly availableAddOns: AvailableAddOnListInstance;
  readonly bulk_exports: BulkExports;
  /**
   * Command resource
   */
  readonly commands: CommandListInstance;
  readonly deployed_devices: DeployedDevices;
  /**
   * ExportConfiguration resource
   */
  readonly exportConfiguration: ExportConfigurationListInstance;
  /**
   * Export resource
   */
  readonly exports: ExportListInstance;
  /**
   * Fleet resource
   */
  readonly fleets: FleetListInstance;
  /**
   * Flow resource
   */
  readonly flows: FlowListInstance;
  /**
   * HostedNumberOrder resource
   */
  readonly hostedNumberOrders: HostedNumberOrderListInstance;
  readonly hosted_numbers: HostedNumbers;
  /**
   * InstalledAddOn resource
   */
  readonly installedAddOns: InstalledAddOnListInstance;
  readonly marketplace: Marketplace;
  readonly proxy: Proxy;
  /**
   * RatePlan resource
   */
  readonly ratePlans: RatePlanListInstance;
  /**
   * Service resource
   */
  readonly services: ServiceListInstance;
  /**
   * Sim resource
   */
  readonly sims: SimListInstance;
  readonly studio: Studio;
  readonly sync: Sync;
  readonly understand: Understand;
  readonly wireless: Wireless;
}

export = Preview;
