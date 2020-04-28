exports.up = function(knex) {
    return knex.schema
    
    .createTable('client', tbl => {
        tbl.increments();
    
        tbl
          .string('username', 128)
          .notNullable()
          .unique();
    
        tbl.string('password', 128).notNullable();

      })

      .createTable('instructor', tbl => {
        tbl.increments();
    
        tbl
        .string('username', 128)
          .notNullable()
          .unique();
    
          tbl.string('password', 128).notNullable();

      })

      .createTable("class", tbl => {
        tbl.increments()
          .unique()
        tbl.integer("instructor_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("instructor")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.string("name", 128)
          .notNullable();
          tbl.string("Type")
          .notNullable();
        tbl.string("start_time")
          .notNullable();
        tbl.integer("duration")
          .notNullable();
        tbl.integer("intensity")
          .notNullable();
        tbl.string("location")
          .notNullable();
        tbl.integer("register_attendees")
        .notNullable();
        tbl.integer("max_size")
        .notNullable();
      })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("class")
    .dropTableIfExists('instructor')
    .dropTableIfExists('client');
};