begin

  delete from action_items;
  delete from attachments;
  delete from links;
  delete from milestones;
  delete from projects;

  p_parse_and_insert_json_to_table('{
  "projects": [
    {
      "id": "1",
      "name": "Pharmacy project",
      "owner": "Tomas",
      "created_by": "TK",
      "links": [
        {
          "name": "Rachel Morris",
          "url": "http://datefjo.do/memwez"
        }
      ],
      "action_items": [
        {
          "project_id": "1",
          "action": "Action 2",
          "the_desc": "N/A",
          "owner": "N/A",
          "status": "completed"
        }
      ],
      "milestones": [
        {
          "project_id": "1",
          "name": "Milestone 4",
          "status": "completed",
          "owner": "N/A",
          "started_date": "01.02.2024",
          "closed_date": "01.04.2024"
        }
      ],
      "attachments": [
        {
          "project_id": "1",
          "contributed_by": "TK"
        }
      ]
    }
  ]
}');
end;

