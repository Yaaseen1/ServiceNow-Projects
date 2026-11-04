/**
 * AALE seed script: creates sample Hardware Stage events.
 * Each insert triggers the "Process Inbound Hardware Data" flow,
 * which creates an Asset Lifecycle record and sets its state.
 *
 * HOW TO RUN
 *   1. In the instance, open System Definition > Scripts - Background
 *   2. Set "in scope" to x_1839598_automa_0 (Automated Asset Lifecycle Engine)
 *   3. Paste this script and click Run script
 *
 * Dates are relative to the day you run it, so results stay current.
 * Safe to re-run: hostnames that already exist are skipped.
 *
 * EXPECTED RESULTS (Asset Lifecycles)
 *   HOU-LT-0142  warranty +12 days  -> Pending Refresh
 *   HOU-SRV-0007 lease    +25 days  -> Pending Refresh
 *   DAL-LT-0310  far-off dates      -> In Stock
 *   AUS-LT-0058  warranty -5 days   -> Pending Refresh (already expired)
 *   HOU-LT-0201  software event     -> Pending Review
 *   HOU-WS-0033  software event     -> Pending Review
 */
(function seed() {
    var TABLE = 'x_1839598_automa_0_hardware_stage';

    function day(n) {
        var g = new GlideDateTime();
        g.addDaysUTC(n);
        return g.getDate().getValue();
    }

    var software = JSON.stringify([
        { name: 'Microsoft Office', version: '16.0' },
        { name: 'Chrome', version: '130' }
    ]);

    var rows = [
        { hostname: 'HOU-LT-0142',  event_type: 'hardware_status', ci_class: 'cmdb_ci_computer', serial_number: 'SN-HOU-LT-0142',  warranty_expiration: day(12) },
        { hostname: 'HOU-SRV-0007', event_type: 'hardware_status', ci_class: 'cmdb_ci_server',   serial_number: 'SN-HOU-SRV-0007', lease_expiration: day(25) },
        { hostname: 'DAL-LT-0310',  event_type: 'hardware_status', ci_class: 'cmdb_ci_computer', serial_number: 'SN-DAL-LT-0310',  warranty_expiration: day(210), lease_expiration: day(300) },
        { hostname: 'AUS-LT-0058',  event_type: 'hardware_status', ci_class: 'cmdb_ci_computer', serial_number: 'SN-AUS-LT-0058',  warranty_expiration: day(-5) },
        { hostname: 'HOU-LT-0201',  event_type: 'software_detected', ci_class: 'cmdb_ci_computer', serial_number: 'SN-HOU-LT-0201', detected_software_json: software },
        { hostname: 'HOU-WS-0033',  event_type: 'software_detected', ci_class: 'cmdb_ci_computer', serial_number: 'SN-HOU-WS-0033', detected_software_json: software }
    ];

    var created = 0;
    rows.forEach(function (r) {
        var check = new GlideRecord(TABLE);
        check.addQuery('hostname', r.hostname);
        check.setLimit(1);
        check.query();
        if (check.hasNext()) {
            return; // already seeded
        }

        var gr = new GlideRecord(TABLE);
        gr.initialize();
        for (var k in r) {
            gr.setValue(k, r[k]);
        }
        gr.setValue('discovery_source', 'seed');
        gr.insert();
        created++;
    });

    gs.info('AALE seed complete: ' + created + ' record(s) created');
})();
